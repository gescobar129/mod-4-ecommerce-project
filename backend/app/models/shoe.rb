class Shoe < ApplicationRecord
    has_many :joiners
    has_many :orders, through: :joiners
    has_many :users, through: :orders
    belongs_to :category
end
