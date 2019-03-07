function snes_to_pc(addr) {
	console.log(addr)
	let bank = (addr & 0xFF0000) >> 16;
	let absolute = addr & 0x00FFFF;
	let abs_corrected = (absolute - 0x8000) * (1 - bank%2)
	return (bank << 15) | abs_corrected;
}

function pc_to_snes(addr) {
	let bank = (addr & 0xFF0000)*2 + (addr & 0x008000)*2;
	let absolute = addr & 0x00FFFF;
	let abs_corrected = (absolute + 0x008000) - (absolute & 0x008000)
	return bank | abs_corrected;
}

module.exports = {
	toPc: snes_to_pc,
	toSnes: pc_to_snes
}