# Reaction Routes

Makes fun with your friends with over 50+ image types ! and keept updated

### List Image Type

```bash
curl -X GET https://api.kagchi.my.id/v3/reaction/list
```

#### Response Result
```json
["akko","angry","baka","bite","blush","bonk","bored","bully","cheer","clap","confused","cookie","cringe","cry","cuddle","dab","dance","facepalm","feed","handhold","happy","highfive","hug","kick","kill","kiss","laugh","lick","nervous","nom","panic","pat","poke","punch","rawr","run","sad","shrug","slap","sleepy","smile","smug","stare","surprised","think","thumbs","tickle","wave","wink","yeet","yes"]
```

### Bulk Image Request
```bash
curl -X POST https://api.kagchi.my.id/v3/reaction -H "Content-Type: application/json" --data-binary @- <<DATA
{
  "type": "akko",
  "limit": 5
}
DATA
```

#### Response Result
```json
["https://i.kagchi.my.id/reactions/akko/972b7f93.gif", "https://i.kagchi.my.id/reactions/akko/f0b54e62.gif", "https://i.kagchi.my.id/reactions/akko/0b313af3.gif", "https://i.kagchi.my.id/reactions/akko/d9f273b6.gif", "https://i.kagchi.my.id/reactions/akko/8e79dd48.gif"]
```

### Image Request
```bash
curl -X GET https://api.kagchi.my.id/v3/reaction?type=akko 
```

#### Response Result
```json
{
    "url": "https://i.kagchi.my.id/reactions/akko/15d412dc.gif"
}
```