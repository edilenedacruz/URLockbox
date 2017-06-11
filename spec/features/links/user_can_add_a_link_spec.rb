require 'rails_helper'

RSpec.feature "Links", js: true do
  it "registered user can add a link" do
    user = create(:user, email_address: "me@email.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    fill_in "Url", with: "http://www.turing.io"
    fill_in "Title", with: "Turing"
    click_button "Add Link"

    expect(current_path).to eq(links_path)
    expect(page).to have_content("Turing")
  end
end
