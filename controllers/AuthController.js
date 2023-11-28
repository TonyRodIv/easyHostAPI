const User = require("../models/acomodacao");

module.exports = class UserController {
  static async register(request, response) {
    const { name, email, password, confirmPassword } = request.body;

    // if (password != confirmPassword) {
    //   request.flash("message", "Senha não conferem. Tente novamente!");
    //   return response.render("layouts/main");
    // }

    // const checkIfUserExists = await User.findOne({ where: { email: email } });

    // if (checkIfUserExists) {
    //   request.flash("message", "O e-mail está em uso!");
    //   return response.render("layouts/main");
    // }


    try {
      const createUser = await User.create(user);
      request.flash("message", "Cadastro realizado com sucesso");

      request.session.save(() => {
        response.redirect("/");
      });
    } catch (error) {
      console.error(error);
    }
  }
};
