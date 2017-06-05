Rails.application.routes.draw do
  root to: "links#index"

  get '/login', to: 'sessions#new', as: "login"
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy', as: "logout"

  resources :users, only: [:new, :create]

  resources :home, only: [:index]

  resources :links, expect: [:delete]

  namespace :api do
    namespace :v1 do
      resources :links, only: [:index, :update]
      resources :hot_urls, only: [:index]
    end
  end
end
