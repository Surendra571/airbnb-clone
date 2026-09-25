import { test, describe } from 'node:test';
import assert from 'node:assert';
import { propertyData } from '../src/data/property';
import { tokens } from '../src/styles/tokens';

describe('Airbnb Clone - Project Setup & Data Verification', () => {
  test('Listing dataset loads and possesses required attributes', () => {
    assert.strictEqual(typeof propertyData.id, 'string');
    assert.strictEqual(propertyData.title, 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10');
    assert.strictEqual(propertyData.location.city, 'Candolim');
    assert.strictEqual(propertyData.capacity.guests, 3);
  });

  test('Gallery photos dataset contains all 21 items with room tags and alt text', () => {
    assert.strictEqual(propertyData.photos.length, 21);
    propertyData.photos.forEach((photo) => {
      assert.ok(photo.id >= 1000, `Photo ID ${photo.id} should be >= 1000`);
      assert.ok(photo.src.startsWith('https://'), `Photo ${photo.id} src must be https`);
      assert.ok(photo.room.length > 0, `Photo ${photo.id} must have a room assigned`);
      assert.ok(photo.alt.length > 0, `Photo ${photo.id} must have accessible alt text`);
    });
  });

  test('Room categories cover all photos without duplicates', () => {
    assert.strictEqual(propertyData.rooms.length, 9);
    const allPhotoIdsInRooms = propertyData.rooms.flatMap((r) => r.photoIds);
    assert.strictEqual(allPhotoIdsInRooms.length, 21);
    const uniqueIds = new Set(allPhotoIdsInRooms);
    assert.strictEqual(uniqueIds.size, 21);
  });

  test('Design tokens match reference measurements', () => {
    assert.strictEqual(tokens.layout.containerMaxWidth, '1120px');
    assert.strictEqual(tokens.layout.headerHeight, '81px');
    assert.strictEqual(tokens.layout.galleryHeight, '480px');
    assert.strictEqual(tokens.layout.bookingCardWidth, '380px');
    assert.strictEqual(tokens.colors.brand, '#FF385C');
    assert.strictEqual(tokens.colors.textPrimary, '#222222');
  });

  test('Photo Tour rooms have valid structure, thumbnails, and anchors', () => {
    const expectedRooms = [
      'Living room 1',
      'Living room 2',
      'Full kitchen',
      'Bedroom',
      'Full bathroom',
      'Gym',
      'Exterior',
      'Pool',
      'Additional photos',
    ];

    assert.strictEqual(propertyData.rooms.length, 9);
    propertyData.rooms.forEach((room, idx) => {
      assert.strictEqual(room.room, expectedRooms[idx]);
      assert.ok(room.photoIds.length > 0, `${room.room} must contain at least 1 photo`);
      assert.ok(room.tags.length > 0, `${room.room} must contain descriptive tags`);
      assert.ok(room.thumbnailSrc.startsWith('https://'), `${room.room} must have a valid thumbnail URL`);
    });
  });

  test('Lightbox indexing, edge boundaries, and counter calculations', () => {
    const photos = propertyData.photos;
    assert.strictEqual(photos.length, 21);

    // First photo (id: 1000)
    const firstIndex = photos.findIndex((p) => p.id === 1000);
    assert.strictEqual(firstIndex, 0);
    const isFirstDisabled = firstIndex <= 0;
    assert.strictEqual(isFirstDisabled, true);
    assert.strictEqual(`${firstIndex + 1} of ${photos.length}`, '1 of 21');

    // Middle photo (id: 1008)
    const middleIndex = photos.findIndex((p) => p.id === 1008);
    assert.strictEqual(middleIndex, 8);
    assert.strictEqual(middleIndex <= 0, false);
    assert.strictEqual(middleIndex >= photos.length - 1, false);
    assert.strictEqual(`${middleIndex + 1} of ${photos.length}`, '9 of 21');
    assert.strictEqual(photos[middleIndex].room, 'Bedroom');

    // Last photo (id: 1020)
    const lastIndex = photos.findIndex((p) => p.id === 1020);
    assert.strictEqual(lastIndex, 20);
    const isLastDisabled = lastIndex >= photos.length - 1;
    assert.strictEqual(isLastDisabled, true);
    assert.strictEqual(`${lastIndex + 1} of ${photos.length}`, '21 of 21');
    assert.strictEqual(photos[lastIndex].room, 'Additional photos');
  });
});
