export default {
    namespaced: true,
    state() {
        return {
            userData: null,
            message: null,
        }
    },
    getters: {
        userVideogames(state, getters, rootState, rootGetters) {
            
            return state.userData.videogamesPurchased.map(userVideogame => {
                console.log("userVideogame")
                console.log(rootState.videogames.items)
                const videogame = rootState.videogames.items.find(videogame => videogame.id === userVideogame)
                console.log("Videogame purchased")
                console.log(videogame)
                if(videogame){
                    return {
                    id: videogame.id,
                    img: videogame.img,
                    name: videogame.name,
                    price: videogame.price,
                }
                }
                
            })
        },
        userVideogameId(state){
            return state.userData.videogamesPurchased;
        }
    },

    mutations: {
        setUser(state, user) {
            state.userData = user
            console.log('setting user' + user)
        },
        changeName(state, newName) {
            state.name = newName
        },
        changeEmail(state, newEmail) {
            state.email = newEmail
        },
        resetUser(state) {
            state.userData = null
        },
        setMessage(state, message) {
            state.message = message
        },
        addVideogameToUser(state, videogamesId) {
            state.userData.videogamesPurchased = state.userData.videogamesPurchased.concat(videogamesId);
            localStorage.setItem("user", JSON.stringify(state.userData));
        },
    },
    actions: {
        async addVideogameToUser({ state, getters, commit, rootState, rootGetters }, videogamesId) {
            commit("addVideogameToUser", videogamesId)
            console.log("updateUser")
            const res = await fetch('https://apiexpress-production-51d9.up.railway.app/api/v1/users/update', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body:  JSON.stringify({newUser: state.userData})
                })
                if (res.status !== 200) {
                    console.log("No es posible actualizar el usuario")
                }
                else {
                    console.log("UpdateUser con éxito")
                    localStorage.setItem("user", JSON.stringify(state.userData))
                    await commit('setUser', state.userData)
                }
        },
        async updateUser({ state, getters, commit, rootState, rootGetters }){
            console.log("updateUser")
            const res = await fetch('https://apiexpress-production-51d9.up.railway.app/api/v1/users/update', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body:  JSON.stringify(state.userData)
                })
                if (res.status !== 200) {
                    console.log("No es posible actualizar el usuario")
                }
                else {
                    console.log("UpdateUser con éxito")
                    localStorage.setItem("user", JSON.stringify(state.userData))
                    await commit('setUser', user)
                }
        },
        async localStorageUser({ commit }) {
            console.log("localStorageUser")
            const user = JSON.parse(localStorage.getItem("user"))
            console.log(user)
            await commit('setUser', user)
        },
        async doLogin({ commit }, { inputEmail, inputPassword }) {
            try {
                const res = await fetch('https://apiexpress-production-51d9.up.railway.app/api/v1/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: inputEmail,
                        password: inputPassword
                    })
                })
                if (res.status !== 200) {
                    await commit('setMessage', "No es posible iniciar sesión")
                }
                else {
                    const data = await res.json()
                    const user = data.user
                    console.log("User: " + user)
                    // localStorage.setItem('name', user.name);
                    // localStorage.setItem('email', user.email);
                    localStorage.setItem("user", JSON.stringify(user))
                    await commit('setUser', user)
                    console.log(data)
                    await commit('setMessage', "Ha iniciado sesión")
                }

            }
            catch (error) {
                //console.error(error.message);
            }
        },
        async doRegister({ commit }, { inputName, inputEmail, inputPassword }) {
            try {
                const res = await fetch('https://apiexpress-production-51d9.up.railway.app/api/v1/users/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        name: inputName,
                        email: inputEmail,
                        password: inputPassword
                    })
                })
                if (res.status === 401) {
                    await commit('setMessage', "Email en uso")
                }
                else {
                    await commit('setMessage', "Usuario creado")
                }
            } catch (error) {
                console.error(error.message);
            }
        },

        async logout({ commit }) {
            try {
                const res = await fetch('https://apiexpress-production-51d9.up.railway.app/api/v1/users/logout', {
                    method: 'DELETE',
                    credentials: 'include',
                })
                const data = await res.json()
                console.log(data)
            }
            catch (error) {
                console.error(error.message);
            }
            localStorage.removeItem('user');
            await commit('resetUser')
        },

    }
}
