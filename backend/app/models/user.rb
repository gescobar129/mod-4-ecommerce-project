class User < ApplicationRecord
    has_many :carts
    has_many :joiners, through: :carts
    has_many :shoes, through: :joiners

    has_secure_password 
    validates :username, uniqueness: true
    validates :username, presence: true
    validates :username, uniqueness: {case_sensitive: false, message: "Username taken, please choose another"}
    
  end
