import React, { useState } from 'react';
import { Button, Row, Col, Table, Modal, Form, Badge } from 'react-bootstrap';

function getStatusBadge(status) {
  const map = { Active: 'success', Inactive: 'secondary' };
  return <Badge bg={map[status] || 'warning'}>{status}</Badge>;
}

function Settings() {
  const [language, setLanguage] = useState('Arabic');
  const [timezone, setTimezone] = useState('GMT+3');

  const [users] = useState([
    { Name: 'Nour Al-Mutairi', Role: 'Analyst', Access: 'View Only', Status: 'Active' },
    { Name: 'Salem Al-Qahtani', Role: 'Credit Mgr', Access: 'Full Access', Status: 'Active' },
  ]);

  return (
    <div className="p-4">
      <h3 className="mb-4">⚙️ Settings & Integrations</h3>

      {/* 🏢 Company Profile */}
      <h5>🏢 Company Profile</h5>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>🏷️ Company Name</Form.Label>
            <Form.Control defaultValue="Al-Tamayouz Trading Co." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>🆔 Unified Number</Form.Label>
            <Form.Control defaultValue="1010123456" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>📧 Admin Email</Form.Label>
            <Form.Control type="email" defaultValue="admin@tamayouz.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>🖼️ Logo Upload</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>🌍 Language</Form.Label>
            <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>Arabic</option>
              <option>English</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>📅 Timezone</Form.Label>
            <Form.Select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
              <option>GMT+3</option>
              <option>GMT+0</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* 🔗 External Integrations */}
      <h5 className="mt-4">🔗 External Data Integrations</h5>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Service</th>
            <th>Status</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wathiq (MCI)</td>
            <td>✅ Connected</td>
            <td>Token ****789 | Expiry: 18 Aug 2025</td>
            <td><Button size="sm">🔄 Refresh</Button> <Button size="sm">🧾 View Usage</Button></td>
          </tr>
          <tr>
            <td>Lean (Open Banking)</td>
            <td>✅ Connected</td>
            <td>Client ID: lean_XXXXX | Permissions: Cash Flow</td>
            <td><Button size="sm">🔄 Reconnect</Button> <Button size="sm" variant="warning">⚠️ Disable</Button></td>
          </tr>
          <tr>
            <td>SIMAH</td>
            <td>⚠️ Not Connected</td>
            <td>Requires SAMA Membership</td>
            <td><Button size="sm">📝 Request Activation</Button></td>
          </tr>
          <tr>
            <td>Justice Scraper</td>
            <td>⚙️ Custom Rules Enabled</td>
            <td>Legal Filtering Active</td>
            <td><Button size="sm">🖋 Edit Logic</Button> <Button size="sm">📈 View History</Button></td>
          </tr>
        </tbody>
      </Table>

      {/* 👥 User Management */}
      <h5 className="mt-4">👥 User Management</h5>
      <p>👤 Primary Admin: Ahmed Al-Fulan</p>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Access Level</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.Name}</td>
              <td>{u.Role}</td>
              <td>{u.Access}</td>
              <td>{getStatusBadge(u.Status)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="mb-3">
        <Button>➕ Add User</Button> <Button variant="secondary">🧾 Audit Logs</Button>
      </div>

      {/* 🔐 API Access */}
      <h5 className="mt-4">🔐 API Access & Webhooks</h5>
      <Form.Group className="mb-2">
        <Form.Label>🧰 API Key</Form.Label>
        <Form.Control type="text" defaultValue="sk_live_...56789" disabled />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>🌍 Webhook URL</Form.Label>
        <Form.Control type="text" defaultValue="https://tamayouz.com/webhook/sanam" />
      </Form.Group>
      <div className="mb-2">
        <Button size="sm">🔄 Regenerate Key</Button> <Button size="sm">📡 Test Ping</Button>
      </div>
      <p className="small">🕒 Last Request: 2 mins ago | Avg. Response Time: 310ms | Errors Today: 0</p>

      {/* 📥 Backup & Export */}
      <h5 className="mt-4">📥 Backup & Export</h5>
      <div className="d-flex gap-2 mb-4">
        <Button variant="outline-primary">⬇ Export All Reports</Button>
        <Button variant="outline-secondary">🧾 Download Audit Logs</Button>
        <Button variant="outline-success">📁 Export Client Data</Button>
      </div>

      {/* Final Save Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <Button variant="success">📤 Save Settings</Button>
        <Button variant="secondary">Restore Defaults</Button>
      </div>
    </div>
  );
}

export default Settings;