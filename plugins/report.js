let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${usedPrefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
    if (text.length < 7) throw `Laporan terlalu pendek, minimal 7 karakter!`
    if (text.length > 100) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
}
handler.help = ['report', 'request'].map(v => v + ' <text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
module.exports = handler
