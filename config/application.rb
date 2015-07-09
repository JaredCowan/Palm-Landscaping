require File.expand_path('../boot', __FILE__)

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

Bundler.require(*Rails.groups)

module PalmLandscaping
  class Application < Rails::Application

    config.time_zone = 'America/Los_Angeles'

    # Disable I18n locale deprecation warning caused by newrelic gem
    # http://stackoverflow.com/questions/20361428/rails-i18n-validation-deprecation-warning
    I18n.enforce_available_locales = true

    config.i18n.default_locale = :en
  end
end
