const rol = 'student'

export const renderHome = (req, res) => {
    res.render('user/home', {
        title: 'GikEdu',
        contentHeader: {
            partial: () => { return "button" },
            args: {
                label: "a",
                value: "Inicia Sesión",
                class: "button",
                url: "/signin"
            }
        },
        contentOptions: {
            partial: () => { return `rol/${rol}` },
        }
    })
    console.log(req)
}


export const renderDocs = (req, res) => res.render('user/docs')