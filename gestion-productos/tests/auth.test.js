describe("Pruebas de autenticación", () => {

  test("Registro de usuario", () => {

    const usuario = {
      name: "Brandon",
      email: "brandon@gmail.com",
      password: "123456"
    };

    expect(usuario.name).toBe("Brandon");
    expect(usuario.email).toContain("@");

  });

  test("Login de usuario", () => {

    const token = "jwt-token";

    expect(token).toBeDefined();

  });

});