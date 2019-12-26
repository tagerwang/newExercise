var _dec, _dec2, _desc, _value, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
   var desc = {};
   Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
   });
   desc.enumerable = !!desc.enumerable;
   desc.configurable = !!desc.configurable;

   if ('value' in desc || desc.initializer) {
      desc.writable = true;
   }

   desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
   }, desc);

   if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
   }

   if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
   }

   return desc;
}

function dec(id) {
   // 此处是按照修饰顺序执行
   console.log('inOrder', id);
   // 返回的函数则是按照反顺序执行。
   return (target, property, descriptor) => console.log('reverse', id);
}

let Example = (_dec = dec(1), _dec2 = dec(2), (_class = class Example {
   method() {}
}, (_applyDecoratedDescriptor(_class.prototype, 'method', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'method'), _class.prototype)), _class));
