require 'rails_helper'

RSpec.feature "Links", js: true do
  it "user receives error if link is invalid" do
    user = create(:user, email_address: "me@email.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    fill_in "Url", with: "www.turing.io"
    fill_in "Title", with: "Turing"
    click_button "Add Link"


    expect(page).to have_content("Url is not a valid URL")
  end
end
