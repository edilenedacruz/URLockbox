require 'rails_helper'

RSpec.feature "Filters", js: true do
  it "can filter links by entering a letter" do
    user = create(:user, email_address: "me@email.com")
    link_1 = user.links.create(url: "http://www.google.com", title: "Google")
    link_2 = user.links.create(url: "http://www.amazon.com", title: "Amazon")

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit '/'

    fill_in "filter", with: "a"

    expect(page).to have_content("Amazon")
    expect(page).to_not have_content("Google")
  end

  it "can filter by using 'Only Read Links' button" do
    user = create(:user, email_address: "me@email.com")
    link_1 = user.links.create(url: "http://www.google.com", title: "Google", read: true)
    link_2 = user.links.create(url: "http://www.amazon.com", title: "Amazon", read: false)

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit '/'

    click_button "Only Read Links"

    expect(page).to have_content("Google")
    expect(page).to_not have_content("Amazon")
  end

  it "can filter by using 'Only Unread Links' button" do
    user = create(:user, email_address: "me@email.com")
    link_1 = user.links.create(url: "http://www.google.com", title: "Google", read: true)
    link_2 = user.links.create(url: "http://www.amazon.com", title: "Amazon")

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit '/'

    click_button "Only Unread Links"

    expect(page).to have_content("Amazon")
    expect(page).to_not have_content("Google")
  end
end
