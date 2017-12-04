const qrcode = new QRCode(document.getElementById('qr'), {
  width: 200,
  height: 200
})

chrome.tabs.getSelected(null, tab => {
  $('#qr').bind('error', e => $(e.target).hide())
  qrcode.makeCode(tab.url)
  $('#url').val(tab.url)
})

$('#url').bind('input', e => qrcode.makeCode($(e.target).val()))
