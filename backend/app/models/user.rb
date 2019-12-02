class User < ApplicationRecord
    has_many :orders
    has_many :shoes, through: :orders
  end
