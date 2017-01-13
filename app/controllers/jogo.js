module.exports.jogo = function(application, req, res){

    if(!req.session.autorizado){
        res.send('usuário precisa fazer o login')
        return;
    }

    var casa = req.session.casa;
    var usuario = req.session.usuario;

    var connection = application.config.dbConnection;
    var JogoDAO = new application.app.models.JogoDAO(connection);

    JogoDAO.iniciaJogo(res, usuario, casa);




}

module.exports.sair = function(application, req, res){

    req.session.destroy(function(err){
        res.render('index', {validacao:{}});
    });

}

module.exports.suditos = function(application, req, res){
    res.render('aldeoes', {validacao:{}});

}

module.exports.pergaminhos = function(application, req, res){
    res.render('pergaminhos', {validacao:{}});
}