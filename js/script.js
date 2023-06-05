$(function () {
    $('.lainnya').hide();
    var tujuan = $('#tujuan').val();
    $('#tujuan').change(function () {
        var tujuan = $('#tujuan').val();
        if (tujuan == 'Lainnya')
            $('.lainnya').show();
        else 
            $('.lainnya').hide();
    });

    if (tujuan == 'Lainnya')
        $('.lainnya').show();
    else   
        $('.lainnya').hide();

    var isiaspirasi = $('#dataaspirasi').data('isiaspirasi');
    if(isiaspirasi)
        $('#isi').html(isiaspirasi);

    
})