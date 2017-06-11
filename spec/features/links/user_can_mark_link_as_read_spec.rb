require 'rails_helper'

RSpec.feature "Mark as Read", js: true do
  xit "link can be marked as read: true" do
    user = create(:user)
    link_1 = create(:link, user: user)

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit '/'

    expect(page).to have_button("Mark as Read")
    click_button("Mark as Read")
    save_and_open_page

    expect(page).to have_content("Mark as Unread")
  end
end
