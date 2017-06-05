require 'rails_helper'

RSpec.feature "AJAX" do
  xit "link can be marked as read: true" do
    user = create(:user)

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit '/'

    # save_and_open_page

    expect(page).to have_link("Mark as Read")

  end
end
