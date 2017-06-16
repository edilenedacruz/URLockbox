require 'rails_helper'

RSpec.feature "Links", js: true do
  xit "user receives error if link is invalid" do
    user = create(:user, email_address: "me@email.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    fill_in "Url", with: "http://www.turing.io"
    fill_in "Title", with: ""
    click_button "Add Link"

    expect(page).to have_content("Title can't be blank")
  end
end
