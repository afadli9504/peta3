var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DissolveKec_2 = new ol.format.GeoJSON();
var features_DissolveKec_2 = format_DissolveKec_2.readFeatures(json_DissolveKec_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissolveKec_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolveKec_2.addFeatures(features_DissolveKec_2);
var lyr_DissolveKec_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DissolveKec_2, 
                style: style_DissolveKec_2,
                popuplayertitle: 'Dissolve Kec',
                interactive: true,
    title: 'Dissolve Kec<br />\
    <img src="styles/legend/DissolveKec_2_0.png" /> AGATS<br />\
    <img src="styles/legend/DissolveKec_2_1.png" /> AKAT<br />\
    <img src="styles/legend/DissolveKec_2_2.png" /> ASWI<br />\
    <img src="styles/legend/DissolveKec_2_3.png" /> ATSY<br />\
    <img src="styles/legend/DissolveKec_2_4.png" /> AWYU<br />\
    <img src="styles/legend/DissolveKec_2_5.png" /> AYIP<br />\
    <img src="styles/legend/DissolveKec_2_6.png" /> BECTBAMU<br />\
    <img src="styles/legend/DissolveKec_2_7.png" /> DER KOUMUR<br />\
    <img src="styles/legend/DissolveKec_2_8.png" /> FAYIT<br />\
    <img src="styles/legend/DissolveKec_2_9.png" /> JETSY<br />\
    <img src="styles/legend/DissolveKec_2_10.png" /> JOERAT<br />\
    <img src="styles/legend/DissolveKec_2_11.png" /> JOUTU<br />\
    <img src="styles/legend/DissolveKec_2_12.png" /> KOLF BRAZA<br />\
    <img src="styles/legend/DissolveKec_2_13.png" /> KOPAY<br />\
    <img src="styles/legend/DissolveKec_2_14.png" /> KOROWAY BULUANOP<br />\
    <img src="styles/legend/DissolveKec_2_15.png" /> PANTAI KASUARI<br />\
    <img src="styles/legend/DissolveKec_2_16.png" /> PULAU TIGA<br />\
    <img src="styles/legend/DissolveKec_2_17.png" /> SAFAN<br />\
    <img src="styles/legend/DissolveKec_2_18.png" /> SAWA ERMA<br />\
    <img src="styles/legend/DissolveKec_2_19.png" /> SIRETS<br />\
    <img src="styles/legend/DissolveKec_2_20.png" /> SOR EP<br />\
    <img src="styles/legend/DissolveKec_2_21.png" /> SUATOR<br />\
    <img src="styles/legend/DissolveKec_2_22.png" /> SURU-SURU<br />\
    <img src="styles/legend/DissolveKec_2_23.png" /> TOMOR BIRIP<br />\
    <img src="styles/legend/DissolveKec_2_24.png" /> UNIR SIRAU<br />\
    <img src="styles/legend/DissolveKec_2_25.png" /> <br />' });
var format_DissolveDesa_3 = new ol.format.GeoJSON();
var features_DissolveDesa_3 = format_DissolveDesa_3.readFeatures(json_DissolveDesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissolveDesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolveDesa_3.addFeatures(features_DissolveDesa_3);
var lyr_DissolveDesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DissolveDesa_3, 
                style: style_DissolveDesa_3,
                popuplayertitle: 'Dissolve Desa',
                interactive: true,
                title: '<img src="styles/legend/DissolveDesa_3.png" /> Dissolve Desa'
            });
var format_BS_FISX_4 = new ol.format.GeoJSON();
var features_BS_FISX_4 = format_BS_FISX_4.readFeatures(json_BS_FISX_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BS_FISX_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BS_FISX_4.addFeatures(features_BS_FISX_4);
var lyr_BS_FISX_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BS_FISX_4, 
                style: style_BS_FISX_4,
                popuplayertitle: 'BS_FISX',
                interactive: true,
                title: '<img src="styles/legend/BS_FISX_4.png" /> BS_FISX'
            });
var format_final_9504_SLS_5 = new ol.format.GeoJSON();
var features_final_9504_SLS_5 = format_final_9504_SLS_5.readFeatures(json_final_9504_SLS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_final_9504_SLS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_final_9504_SLS_5.addFeatures(features_final_9504_SLS_5);
var lyr_final_9504_SLS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_final_9504_SLS_5, 
                style: style_final_9504_SLS_5,
                popuplayertitle: 'final_9504_SLS',
                interactive: true,
                title: '<img src="styles/legend/final_9504_SLS_5.png" /> final_9504_SLS'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_DissolveKec_2.setVisible(true);lyr_DissolveDesa_3.setVisible(true);lyr_BS_FISX_4.setVisible(true);lyr_final_9504_SLS_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleSatellite_1,lyr_DissolveKec_2,lyr_DissolveDesa_3,lyr_BS_FISX_4,lyr_final_9504_SLS_5];
lyr_DissolveKec_2.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'layer': 'layer', 'path': 'path', 'idkec': 'idkec', });
lyr_DissolveDesa_3.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'iddesa': 'iddesa', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'layer': 'layer', 'path': 'path', 'idkec': 'idkec', });
lyr_BS_FISX_4.set('fieldAliases', {'kk': 'kk', 'gid': 'gid', 'sbs': 'sbs', 'base': 'base', 'bstt': 'bstt', 'idbs': 'idbs', 'kdbs': 'kdbs', 'luas': 'luas', 'bsbtt': 'bsbtt', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'bstt_k': 'bstt_k', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'khusus': 'khusus', 'muatan': 'muatan', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'posisi': 'posisi', 'rw_dki': 'rw_dki', 'segmen': 'segmen', 'sumber': 'sumber', 'dom_sls': 'dom_sls', 'dominan': 'dominan', 'periode': 'periode', 'tingkat': 'tingkat', 'nm_gedung': 'nm_gedung', });
lyr_final_9504_SLS_5.set('fieldAliases', {'kk': 'kk', 'gid': 'gid', 'ikn': 'ikn', 'bstt': 'bstt', 'luas': 'luas', 'bsbtt': 'bsbtt', 'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'bstt_k': 'bstt_k', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'khusus': 'khusus', 'muatan': 'muatan', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'posisi': 'posisi', 'rw_dki': 'rw_dki', 'segmen': 'segmen', 'sumber': 'sumber', 'dom_sls': 'dom_sls', 'periode': 'periode', 'tingkat': 'tingkat', 'idsubsls': 'idsubsls', 'kdsubsls': 'kdsubsls', 'nm_gedung': 'nm_gedung', 'wil_campur': 'wil_campur', 'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_DissolveKec_2.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'idkec': 'TextEdit', });
lyr_DissolveDesa_3.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'iddesa': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'idkec': 'TextEdit', });
lyr_BS_FISX_4.set('fieldImages', {'kk': 'Range', 'gid': 'Range', 'sbs': 'TextEdit', 'base': 'TextEdit', 'bstt': 'Range', 'idbs': 'TextEdit', 'kdbs': 'TextEdit', 'luas': 'TextEdit', 'bsbtt': 'Range', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'bstt_k': 'Range', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'khusus': 'TextEdit', 'muatan': 'Range', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'posisi': 'TextEdit', 'rw_dki': 'TextEdit', 'segmen': 'TextEdit', 'sumber': 'TextEdit', 'dom_sls': 'TextEdit', 'dominan': 'TextEdit', 'periode': 'TextEdit', 'tingkat': 'Range', 'nm_gedung': 'TextEdit', });
lyr_final_9504_SLS_5.set('fieldImages', {'kk': 'TextEdit', 'gid': 'Range', 'ikn': 'Range', 'bstt': 'TextEdit', 'luas': 'TextEdit', 'bsbtt': 'TextEdit', 'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'bstt_k': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'khusus': 'TextEdit', 'muatan': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'posisi': 'TextEdit', 'rw_dki': 'TextEdit', 'segmen': 'TextEdit', 'sumber': 'TextEdit', 'dom_sls': 'TextEdit', 'periode': 'TextEdit', 'tingkat': 'TextEdit', 'idsubsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nm_gedung': 'TextEdit', 'wil_campur': 'TextEdit', 'fid': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DissolveKec_2.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'luas': 'no label', 'sumber': 'no label', 'periode': 'no label', 'layer': 'no label', 'path': 'no label', 'idkec': 'no label', });
lyr_DissolveDesa_3.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kddesa': 'no label', 'iddesa': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'luas': 'no label', 'sumber': 'no label', 'periode': 'no label', 'layer': 'no label', 'path': 'no label', 'idkec': 'no label', });
lyr_BS_FISX_4.set('fieldLabels', {'kk': 'no label', 'gid': 'no label', 'sbs': 'no label', 'base': 'no label', 'bstt': 'no label', 'idbs': 'no label', 'kdbs': 'no label', 'luas': 'no label', 'bsbtt': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdsls': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmsls': 'no label', 'bstt_k': 'no label', 'kddesa': 'no label', 'kdprov': 'no label', 'khusus': 'no label', 'muatan': 'no label', 'nmdesa': 'no label', 'nmprov': 'no label', 'posisi': 'no label', 'rw_dki': 'no label', 'segmen': 'no label', 'sumber': 'no label', 'dom_sls': 'no label', 'dominan': 'no label', 'periode': 'no label', 'tingkat': 'no label', 'nm_gedung': 'no label', });
lyr_final_9504_SLS_5.set('fieldLabels', {'kk': 'no label', 'gid': 'no label', 'ikn': 'no label', 'bstt': 'no label', 'luas': 'no label', 'bsbtt': 'no label', 'idsls': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdsls': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmsls': 'no label', 'bstt_k': 'no label', 'kddesa': 'no label', 'kdprov': 'no label', 'khusus': 'no label', 'muatan': 'no label', 'nmdesa': 'no label', 'nmprov': 'no label', 'posisi': 'no label', 'rw_dki': 'no label', 'segmen': 'no label', 'sumber': 'no label', 'dom_sls': 'no label', 'periode': 'no label', 'tingkat': 'no label', 'idsubsls': 'no label', 'kdsubsls': 'no label', 'nm_gedung': 'no label', 'wil_campur': 'no label', 'fid': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_final_9504_SLS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});