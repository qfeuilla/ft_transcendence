Rails.application.routes.draw do
  # home page
  root "home#index"
  scope "api" do
    resources :guilds
  end

  post '/profile/edit', to: 'profile#update'
  post '/profile/password', to: 'profile#change_password'

  post 'profile/enable_otp'
  post 'profile/disable_otp'

  # sign in route:
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  # sign out route:
  devise_scope :user do
    delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session_path
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
