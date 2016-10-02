defmodule WheredafuckruApi.Repo.Migrations.CreatePosition do
  use Ecto.Migration

  def change do
    create table(:positions) do
      add :identifier, :string
      add :latitude, :decimal
      add :longitude, :decimal
      timestamps()
    end

  end
end
