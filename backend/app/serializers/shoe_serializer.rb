class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :name , :cost, :image, :category, :brand, :price

  def price
    number_to_currency(self.object.cost)
  end

end
