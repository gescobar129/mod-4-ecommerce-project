class Order < ApplicationRecord
  belongs_to :user
  has_many :joiners
  has_many :shoes, through: :joiners
end
