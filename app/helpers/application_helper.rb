module ApplicationHelper

  def logged_in?
    return action_name != "login"
  end
end
