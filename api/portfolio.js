export default async function handler(req, res) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID || 'appV1TN3h1EwTr3Za';
  const tableId =
    process.env.AIRTABLE_PORTFOLIO_TABLE_ID || 'tblmZxhXNvsMEzEl6';

  if (!token) {
    return res.status(500).json({
      error: 'Configuration Airtable manquante.'
    });
  }

  const params = new URLSearchParams();
  params.set('filterByFormula', '{Publié}=1');
  params.set('sort[0][field]', 'Ordre');
  params.set('sort[0][direction]', 'asc');
  params.set('pageSize', '100');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  const records = [];
  let offset = null;

  try {
    do {
      const q = new URLSearchParams(params);

      if (offset) {
        q.set('offset', offset);
      }

      const url =
        `https://api.airtable.com/v0/${baseId}/${tableId}?${q.toString()}`;

      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({
          error: 'Erreur Airtable.'
        });
      }

      for (const row of data.records || []) {
        const f = row.fields || {};

        records.push({
          id: row.id,
          project: f.Projet || '',
          category: f['Catégorie'] || '',
          city: f.Ville || '',
          description: f.Description || '',

          images: Array.isArray(f.Images)
            ? f.Images.map((img) => ({
                url: img.url,
                filename: img.filename || '',
                type: img.type || '',
                thumbnails: img.thumbnails || undefined
              }))
            : [],

          featured: Boolean(f.Vedette),

          order: Number.isFinite(f.Ordre)
            ? f.Ordre
            : null,

          year: Number.isFinite(f['Année'])
            ? f['Année']
            : null,

          status: f.Statut_portfolio || '',
          programme: f.Programme || ''
        });
      }

      offset = data.offset || null;
    } while (offset);

    res.setHeader(
      'Cache-Control',
      's-maxage=60, stale-while-revalidate=300'
    );

    return res.status(200).json({
      records
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Portfolio momentanément indisponible.'
    });
  }
}
