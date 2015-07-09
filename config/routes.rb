Rails.application.routes.draw do

  resources :static_pages, only: :index, path: "/:action", as: ":action"

  root 'static_pages#login'
end
