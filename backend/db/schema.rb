# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_04_195536) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "shoe_id"
    t.index ["shoe_id"], name: "index_orders_on_shoe_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "shoes", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "image"
    t.integer "cost"
    t.bigint "category_id"
    t.index ["category_id"], name: "index_shoes_on_category_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
  end

end
