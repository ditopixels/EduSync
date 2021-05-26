import User from '../models/Users.js'
import School from '../models/School.js'
import { admin as nav } from '../helpers/nav.js'

export const renderDashboard = async(req, res) => {
    const { username, email, rol } = await User.findOne({ _id: req.user._id })
    const { name, code } = await School.findOne({ _id: req.user.school })

    const courses = ["c1", "c2", "c3", "c4"]

    const path = req.path.toLowerCase().split('/')

    const data = {
        title: "GikEdu - App",
        contentHeader: {
            partial: () => { return 'profile' },
        },
        contentRol: {
            partial: () => {
                if (path[2] == 'biblioteca' || path[2] == 'institucion') return `rol/${path[2]}`
                if (path[2]) return `rol/${rol}/${path[2]}`
                return `rol/${rol}/inicio`
            },
            args: {}
        },

        data: {
            username,
            email,
            name,
            code,
            courses,
            rol
        },
        menubtn: true
    }

    data.navegator = nav(path)

    res.render('user/dashboard', data)
}
export const renderMiembros = (req, res) => {
    res.render('members', {})
}