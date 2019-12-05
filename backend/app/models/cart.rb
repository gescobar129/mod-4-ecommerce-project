class Category < ApplicationRecord
    has_many :joiners
    has_many :shoes, through: :joiners
    belongs_to :user
end 