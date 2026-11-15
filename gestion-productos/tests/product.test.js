describe("Pruebas de productos", () => {

  test("Creación de producto", () => {

    const producto = {
      nombre: "Laptop",
      precio: 15000,
      stock: 10
    };

    expect(producto.nombre).toBe("Laptop");
    expect(producto.precio).toBeGreaterThan(0);

  });

  test("Stock válido", () => {

    const stock = 10;

    expect(stock).toBeGreaterThanOrEqual(0);

  });

});