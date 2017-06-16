require 'rails_helper'

RSpec.feature "Mark as Unread", js: true do
  it "link can be marked as read: true" do
    user = create(:user)
    link_1 = user.links.create(url: "http://www.google.com", title: "Google", read: true)

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit '/'

    expect(page).to have_content("Read: true")
    expect(page).to have_button("Mark as Unread")

    click_button("Mark as Unread")

    expect(page).to have_content("Mark as Read")
    expect(page).to have_content("Read: false")
  end
end
