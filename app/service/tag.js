/*
 * @Author: 柒叶
 * @Date: 2020-05-01 17:37:40
 * @Last Modified by: 柒叶
 * @Last Modified time: 2020-05-03 09:24:21
 */

'use strict';
const Service = require('egg').Service;

class Tag extends Service {
  async tags() {
    return this.ctx.model.Tag.findAll({
      where: { status: 1 },
      include: [{
        model: this.ctx.model.Category,
        as: 'category',
      }],
    });
  }

  async createTag(data) {
    return this.ctx.model.Tag.create(data);
  }

  async deleteTag(id) {
    return this.ctx.model.Tag.update({
      status: 2,
    }, {
      where: { id },
    });
  }
}

module.exports = Tag;
