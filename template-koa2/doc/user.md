# 用户

## 接口前缀

```shell
http://localhost:5200/api/user
```

## 创建用户

```
POST    /create
```

### 参数说明

| 参数     | 类型         | 默认值 | 是否必填 | 说明     |
| -------- | ------------ | ------ | -------- | -------- |
| nickname | `string(25)` | -      | ✅       | 用户昵称 |

### 成功操作返回

```json
{
    "code": 200,
    "msg": "创建用户成功"
}
```