class Api::V1::HotUrlsController < ApplicationController
  def index
  render json: Link.where('updated_at > ? AND read = ?', 24.hours.ago, true)
  end
end
