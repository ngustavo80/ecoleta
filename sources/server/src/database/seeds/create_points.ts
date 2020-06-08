import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('points').insert([
        {image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', name: 'Mercado do seu Ze', email: 'mercadoze@contato.com', whatsapp: '22974039181', latitude: '-22.8953571', longitude: '-43.0680482', city: 'Niteroi', 'uf': 'RJ'},
        {image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', name: 'Resturante da Tia Maria', email: 'tiamaria@contato.com', whatsapp: '22434039181', latitude: '-22.892431', longitude: '-43.5670482', city: 'Niteroi', 'uf': 'RJ'},
        {image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', name: 'Mercado do Jarrada', email: 'jarrada@contato.com', whatsapp: '2297403957', latitude: '-22.854678571', longitude: '-43.0687682', city: 'Niteroi', 'uf': 'RJ'}
    ])
}