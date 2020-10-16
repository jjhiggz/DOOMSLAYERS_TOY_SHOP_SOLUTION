class CreateSounds < ActiveRecord::Migration[6.0]
  def change
    create_table :sounds do |t|
      t.string :name
      t.integer :attentionScore

      t.timestamps
    end
  end
end
