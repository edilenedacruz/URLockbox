require 'rails_helper'

RSpec.feature "Links" do
  it "can edit a link" do
    user = create(:user, email_address: "me@email.com")
    link_1 = create(:link, user: user)

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    expect(page).to have_content("Title: Turing")
    within("##{link_1.id}") do
      click_link "Edit"
    end

    expect(current_path).to eq(edit_link_path(link_1))

    fill_in "Title", with: "Home Page"
    click_button "Update Link"
    expect(current_path).to eq(links_path)
    expect(page).to have_content("The link has been updated.")
    # expect(page).to_not have_content("Turing")
  end

  it "doesn't update if requirements not met" do
    user = create(:user, email_address: "me@email.com")
    link_1 = create(:link, user: user)

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    within("##{link_1.id}") do
      click_link "Edit"
    end

    fill_in "Title", with: ""
    click_button "Update Link"

    expect(current_path).to eq(link_path(link_1.id))
    expect(page).to have_content("Title can't be blank")
  end

  it "doesnt' update link if requirements not met to update it" do
    user = create(:user, email_address: "me@email.com")
    link_1 = create(:link, user: user)

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    within("##{link_1.id}") do
      click_link "Edit"
    end

    fill_in "Url", with: "www.google.com"
    click_button "Update Link"

    expect(current_path).to eq(link_path(link_1.id))
    expect(page).to have_content("Url is not a valid URL")
  end

end
