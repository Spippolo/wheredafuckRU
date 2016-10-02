defmodule WheredafuckruApi.PositionControllerTest do
  use WheredafuckruApi.ConnCase

  alias WheredafuckruApi.Position
  @valid_attrs %{identifier: "some content", latitude: "120.5", longitude: "120.5"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, position_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    position = Repo.insert! %Position{}
    conn = get conn, position_path(conn, :show, position)
    assert json_response(conn, 200)["data"] == %{"id" => position.id,
      "identifier" => position.identifier,
      "latitude" => position.latitude,
      "longitude" => position.longitude}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, position_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, position_path(conn, :create), position: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Position, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, position_path(conn, :create), position: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    position = Repo.insert! %Position{}
    conn = put conn, position_path(conn, :update, position), position: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Position, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    position = Repo.insert! %Position{}
    conn = put conn, position_path(conn, :update, position), position: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    position = Repo.insert! %Position{}
    conn = delete conn, position_path(conn, :delete, position)
    assert response(conn, 204)
    refute Repo.get(Position, position.id)
  end
end
