class User < ApplicationRecord
    has_many :orders 
    has_many :shoes, through: :orders 

    validates :username, uniqueness: true
    validates :username, presence: :true
    validates :username, uniqueness: {case_sensitive: false, message: "Username taken, please choose another"}
    
end
