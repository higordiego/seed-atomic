'use strict'
import create     from '../../../_organelles/organelle-create';
import list       from '../../../_organelles/organelle-find';
import update     from '../../../_organelles/organelle-update';
import remove     from '../../../_organelles/organelle-remove';
import artifacts  from '../../../_moleculas/artifacts-model';
import storage    from '../../../_quarks/request-upload';
import multer     from 'multer';

module.exports =  (app) => {

  // url default artifacts
  const url = '/api/artifacts'
  // File upload com multer
  const upload = multer({ storage: storage });
  // Routes (crud + upload)
  app.route(url)
  .post(upload.single('file'), create(artifacts))
  .get(list(artifacts))
  .put(update(artifacts))
  .delete(remove(artifacts))

}
