defmodule WheredafuckruApi.PositionTest do
  use WheredafuckruApi.ModelCase

  alias WheredafuckruApi.Position

  @valid_attrs %{identifier: "some content", latitude: "120.5", longitude: "120.5"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Position.changeset(%Position{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Position.changeset(%Position{}, @invalid_attrs)
    refute changeset.valid?
  end
end
