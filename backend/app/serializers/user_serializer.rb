class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :orders
  has_many :shoes
end
