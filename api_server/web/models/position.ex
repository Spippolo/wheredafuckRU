defmodule WheredafuckruApi.Position do
  use WheredafuckruApi.Web, :model

  schema "positions" do
    field :identifier, :string
    field :latitude, :decimal
    field :longitude, :decimal

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:identifier, :latitude, :longitude])
    |> validate_required([:identifier, :latitude, :longitude])
  end
end
