function MessageCodec(schema) {
  return {
    encode(app) {
      return new Proxy(app, {
        get(target, property) {
          if (!Object.hasOwn(target, property)) {
            return Reflect.get(target, property);
          }
          const v = Reflect.get(target, property);
          return schema[property].encode(v);
        }
      });
    },
    decode(proto) {
      return new Proxy(proto, {
        get(target, property) {
          if (!Object.hasOwn(target, property)) {
            return Reflect.get(target, property);
          }
          const v = Reflect.get(target, property);
          return schema[property].decode(v);
        }
      });
    }
  };
}
function ArrayCodec(t) {
  return {
    encode(app) {
      return app.map(t.encode);
    },
    decode(proto) {
      if (proto === void 0)
        return [];
      return proto.map(t.decode);
    }
  };
}
function MutableArrayCodec(t) {
  return {
    encode(app) {
      return app.map(t.encode);
    },
    decode(proto) {
      if (proto === void 0)
        return [];
      return proto.map(t.decode);
    }
  };
}
function OptionalCodec(t) {
  return {
    encode(app) {
      if (app === void 0)
        return void 0;
      return t.encode(app);
    },
    decode(proto) {
      if (proto === void 0)
        return void 0;
      return t.decode(proto);
    }
  };
}
function RequiredCodec(t) {
  return {
    encode(app) {
      if (app === void 0)
        throw new Error("Value is required but undefined");
      return t.encode(app);
    },
    decode(proto) {
      if (proto === void 0)
        throw new Error("Value is required but undefined");
      return t.decode(proto);
    }
  };
}
function NullOrCodec(t) {
  return {
    encode(app) {
      if (app === null)
        return null;
      return t.encode(app);
    },
    decode(proto) {
      if (proto === null)
        return null;
      return t.decode(proto);
    }
  };
}
const BigIntCodec = {
  encode(app) {
    return app;
  },
  decode(proto) {
    return proto;
  }
};
const NumberCodec = {
  encode(app) {
    return app;
  },
  decode(proto) {
    return proto;
  }
};
const Uint8ArrayCodec = {
  encode(app) {
    return app;
  },
  decode(proto) {
    return proto;
  }
};
const DateCodec = {
  encode(app) {
    return new Date(app);
  },
  decode(proto) {
    return new Date(proto);
  }
};
const BooleanCodec = {
  encode(app) {
    return app;
  },
  decode(proto) {
    return proto;
  }
};
const StringCodec = {
  encode(app) {
    return app;
  },
  decode(proto) {
    return proto;
  }
};
const UndefinedCodec = {
  encode(app) {
    return void 0;
  },
  decode(proto) {
    return void 0;
  }
};
const LiteralCodec = (value) => {
  return {
    encode(app) {
      if (app !== value) {
        throw new Error(`Expected ${String(value)}, got ${String(app)}`);
      }
      return app;
    },
    decode(proto) {
      if (proto !== value) {
        throw new Error(`Expected ${String(value)}, got ${String(proto)}`);
      }
      return proto;
    }
  };
};
const LiteralUnionCodec = (values) => {
  return {
    encode(app) {
      if (!values.includes(app)) {
        throw new Error(
          `Expected one of [${values.join(", ")}], got ${String(app)}`
        );
      }
      return app;
    },
    decode(proto) {
      if (!values.includes(proto)) {
        throw new Error(
          `Expected one of [${values.join(", ")}], got ${String(proto)}`
        );
      }
      return proto;
    }
  };
};
const VariantCodec = (options) => {
  return {
    encode(app) {
      const tag = app[options.tag];
      const codec = options.variants[tag];
      if (!codec) {
        throw new Error(`Unknown variant: ${String(tag)}`);
      }
      const variantData = app[tag];
      const encodedData = codec.encode(variantData);
      return {
        [options.discriminator]: tag,
        [tag]: encodedData
      };
    },
    decode(proto) {
      const tag = proto[options.discriminator];
      const codec = options.variants[tag];
      if (!codec) {
        throw new Error(`Unknown variant: ${String(tag)}`);
      }
      const variantData = proto[tag];
      const decodedData = codec.decode(variantData);
      return {
        [options.tag]: tag,
        [tag]: decodedData
      };
    }
  };
};
function OneOfCodec(variants) {
  return VariantCodec({
    tag: "_tag",
    discriminator: "$case",
    variants
  });
}

export { ArrayCodec, BigIntCodec, BooleanCodec, DateCodec, LiteralCodec, LiteralUnionCodec, MessageCodec, MutableArrayCodec, NullOrCodec, NumberCodec, OneOfCodec, OptionalCodec, RequiredCodec, StringCodec, Uint8ArrayCodec, UndefinedCodec, VariantCodec };
//# sourceMappingURL=codec.mjs.map
