class ShoeSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper
  
  attributes :id, :name , :cost, :image, :brand, :price
  belongs_to :category

  def price
    number_to_currency(self.object.cost)
  end

end
