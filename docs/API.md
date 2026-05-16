# KARYOGIT API Documentation

## Base URL
```
https://api.karyogit.id/api
```

## Endpoints

### Projects

#### Get All Projects
```
GET /projects?status=active&tags=tag1,tag2&search=query&limit=20&offset=0
```

**Query Parameters:**
- `status` - Project status (active, pending, featured, archived)
- `tags` - Comma-separated tags to filter
- `search` - Search keyword
- `category` - Filter by category
- `limit` - Results per page (default: 20)
- `offset` - Pagination offset (default: 0)

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Project Name",
      "slug": "project-slug",
      "description": "Description",
      "tags": ["#UMKM", "#FinTech"],
      "downloads": 1000,
      "stars": 100,
      "status": "active"
    }
  ],
  "total": 100,
  "limit": 20,
  "offset": 0
}
```

#### Get Trending Projects
```
GET /projects/trending
```

**Response:**
```json
{
  "data": [
    // Top 10 trending projects sorted by downloads and stars
  ]
}
```

#### Get Project by Slug
```
GET /projects/{slug}
```

**Response:**
```json
{
  "data": {
    "id": "uuid",
    "name": "Project Name",
    "slug": "project-slug",
    "description": "Description",
    "long_description": "Long description",
    "tags": ["#UMKM"],
    "author": {
      "id": "uuid",
      "name": "Developer Name",
      "username": "github_username"
    },
    "releases": [
      {
        "version": "1.0.0",
        "file_url": "https://releases.karyogit.id/...",
        "downloads": 500
      }
    ]
  }
}
```

#### Create Project
```
POST /projects
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Project Name",
  "slug": "project-slug",
  "description": "Description",
  "category": "UMKM",
  "tags": ["#UMKM", "#FinTech"],
  "repo_url": "https://github.com/...",
  "demo_url": "https://demo...."
}
```

**Response:** 201 Created

### Developers

#### Get All Developers
```
GET /developers?city=Jakarta&skills=JavaScript&limit=20&offset=0
```

#### Get Developer by Username
```
GET /developers/{username}
```

#### Get Developer Statistics
```
GET /developers/{developerId}/stats
```

### Releases

#### Get Project Releases
```
GET /releases/project/{projectId}
```

#### Get Latest Release
```
GET /releases/project/{projectId}/latest
```

#### Create Release
```
POST /releases
Authorization: Bearer {token}
Content-Type: multipart/form-data

{
  "project_id": "uuid",
  "version": "1.0.0",
  "release_notes": "Release notes",
  "file": <binary>
}
```

### Badges

#### Get Badge SVG
```
GET /badges/{projectId}?tier=registered
```

**Query Parameters:**
- `tier` - Badge tier (registered, verified, featured)

**Response:** SVG image

#### Get Badge Markdown
```
GET /badges/{projectId}/markdown?tier=registered
```

**Response:**
```json
{
  "markdown": "[![Made with KARYOGIT](...)](https://karyogit.id)",
  "html": "<a href=\"...\">"
}
```

## Authentication

Use GitHub OAuth token in the Authorization header:
```
Authorization: Bearer {github_oauth_token}
```

## Error Responses

```json
{
  "error": "Error message",
  "status": 400
}
```

## Rate Limiting

- Limit: 100 requests per 15 minutes per IP
- Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

## CORS

Requests are accepted from:
- `https://karyogit.id`
- `http://localhost:3000` (development)

## Examples

### Search Projects
```bash
curl "https://api.karyogit.id/api/projects?search=edutech&limit=10"
```

### Get Developer
```bash
curl "https://api.karyogit.id/api/developers/ahmadrizki"
```

### Filter by Tags
```bash
curl "https://api.karyogit.id/api/projects?tags=%23UMKM,%23Edutech"
```

---

For more information, visit [github.com/karyogit/karyogit](https://github.com/karyogit/karyogit)
