class User < ActiveRecord::Base
  default_scope -> { order('first_name ASC, last_name DESC') }

  validates :first_name, :last_name, :email, :phone, presence: true
  
  def to_param
    "#{id}-#{first_name}-#{last_name}"
  end
end
