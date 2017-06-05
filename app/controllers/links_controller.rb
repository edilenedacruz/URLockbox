class LinksController < ApplicationController
  before_action :require_login

  def index
    @links = current_user.links.order(id: :desc)
  end


  def create
    @user = current_user
    @link = @user.links.create(link_params)
    if @link.save
      flash[:success] = "A new link has been added."
      redirect_to links_path
    else
      flash[:danger] = @link.errors.full_messages.to_sentence
      render :edit
    end
  end

  def edit
    @link = Link.find(params[:id])
  end

  def update
    @link = Link.find(params[:id])
    @link.update_attributes(link_params)
    if @link.save
      flash[:success] = "The link has been updated."
      redirect_to links_path
    else
      flash[:danger] = @link.errors.full_messages.to_sentence
      render :edit
    end
  end

  private

  def require_login
    unless current_user
      flash.now[:warning] = "You must be logged in to access this page."
      redirect_to home_index_path
    end
  end

  def link_params
    params.require(:link).permit(:title, :url, :user_id)
  end
end
